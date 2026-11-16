# UDAY IdeaLab website

Next.js (App Router) site for UDAY IdeaLab Pvt. Ltd.

## Run it

```bash
npm run dev      # development, http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where things live

- `lib/site.ts`: all copy and data (services, projects, partners, contact details).
- `app/`: one folder per page (`about`, `services`, `work`, `partners`, `contact`).
- `components/`: shared pieces (nav, footer, project visuals, contact form).
- `app/globals.css`: the whole design system (colours, type, layout).

## Before publishing

1. Contact details: fill in `email`, `phone` and `address` in `lib/site.ts`. Until then the
   site shows "To be announced" and the enquiry form cannot send.
2. Karkhana Samuha report: add programme details and outcomes, and link the report
   (`karkhana-digital-education` in `lib/site.ts`).
3. Documentary credits: confirm whether UDAY IdeaLab handled the whole production or parts of it.
4. Partner logos are in `public/partners/`; the UDAY logo is in `public/brand/`
   (`uday-logo.png` is the original, the `-light` and `-dark` files are transparent versions).
5. Leo District Council engagement: confirm the start date and current status.
6. Project covers: the two websites and the documentary use real images in `public/work/`.
   The other four are drawn covers; add an `image` to the project in `lib/site.ts` to replace one.
7. The homepage hero uses a still from the Karkhana Samuha documentary. Swap
   `public/work/karkhana-documentary.jpg` for a sharper photo or video when one is available.
