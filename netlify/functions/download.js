import Stripe from 'stripe';
import fetch from 'node-fetch';
import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib';

const stripe = new Stripe(process.env.NETLIFY_KEY);

const MASTER_EN = 'https://drive.google.com/uc?export=download&id=1ClKBo9YPlD4sypx4ZQaCzvWRmA7JGwR-';
const MASTER_DE = 'https://drive.google.com/uc?export=download&id=1ABNWg3YC95F-E49XPPYOOG9e47BW2YQZ';

export const handler = async (event) => {
  const sid = event.queryStringParameters.session_id;
  if (!sid)  return { statusCode: 400, body: 'missing session_id' };

  const s = await stripe.checkout.sessions.retrieve(sid);
  if (s.payment_status !== 'paid') return { statusCode: 403, body: 'unpaid' };

  const email = s.customer_details.email || 'customer';

  const [en,de] = await Promise.all([fetch(MASTER_EN).then(r=>r.arrayBuffer()),
                                     fetch(MASTER_DE).then(r=>r.arrayBuffer())]);

  const out = await PDFDocument.create();
  const font = await out.embedFont(StandardFonts.Helvetica);

  for (const buf of [en,de]) {
    const src = await PDFDocument.load(buf);
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach(p => {
      out.addPage(p);
      const {height:h} = p.getSize();
      p.drawText(email,{x:40,y:h/2,size:40,font,rotate:degrees(45),opacity:.15,color:rgb(.6,.6,.6)});
    });
  }

  const pdf = await out.save();
  return {
    statusCode: 200,
    headers:{
      'Content-Type':'application/pdf',
      'Content-Disposition':`attachment; filename="Light-Reset_${email}.pdf"`
    },
    body: Buffer.from(pdf).toString('base64'),
    isBase64Encoded:true
  };
};
