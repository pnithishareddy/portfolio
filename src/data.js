// Edit this file to personalise the whole site.
export const profile = {
  name: 'Nithisha Reddy',
  role: 'Full Stack Developer',
  tagline: 'I build responsive, user-friendly web applications end to end, from React interfaces to Java and SQL back ends, and deploy them live.',
  email: 'palemnithisha@thestackly.com',
  location: 'Hyderabad, India',
  about: [
    'I am a full stack developer from Hyderabad who turns ideas into fast, polished and easy-to-use web applications. I work across the stack, building React interfaces and Java and SQL back ends, with projects spanning e-commerce, authentication, booking and event management.',
    'I care about clear structure, reusable components and accessible design, and I enjoy owning a project end to end: planning the UI, writing the code, managing the data and deploying it live. I am actively looking for opportunities to grow as part of a collaborative engineering team.',
  ],
}

export const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/thestackly/' },
  { name: 'Instagram', url: 'https://www.instagram.com/the_stackly/' },
  { name: 'X (Twitter)', url: 'https://x.com/the_stackly' },
  { name: 'LinkedIn', url: 'https://in.linkedin.com/company/the-stackly' },
]

export const skills = [
  { group: 'Frontend', blurb: 'Interfaces I design and build', items: [['React', 'Advanced'], ['JavaScript', 'Advanced'], ['HTML5', 'Advanced'], ['CSS3', 'Advanced'], ['Tailwind CSS', 'Advanced']] },
  { group: 'Backend & Database', blurb: 'Server-side logic and data', items: [['Java', 'Intermediate'], ['SQL', 'Intermediate']] },
  { group: 'Tools', blurb: 'How I build, version and ship', items: [['Git & GitHub', 'Intermediate'], ['Vite', 'Intermediate'], ['Netlify', 'Advanced']] },
]

export const services = [
  ['Responsive UI', 'Layouts that look right on phones, tablets and desktops.'],
  ['Clean Code', 'Reusable components and readable, maintainable structure.'],
  ['Fast & Accessible', 'Quick load times and keyboard and screen-reader friendly pages.'],
]

// image: screenshot in public/projects/ (see public/projects/README.txt). If the file is missing, an illustration is shown instead.
export const projects = [
  { title: 'E-Commerce Shopping', art: 'shop', image: '/projects/ecommerce.png', desc: 'Responsive online storefront with product browsing, cart management and a streamlined shopping flow.', tags: ['React','E-Commerce'], live: 'https://ecommerceeshoppingg.netlify.app', code: 'https://github.com/pnithishareddy/ecommerce' },
  { title: 'User Login Portal', art: 'login', image: '/projects/login-portal.png', desc: 'Login interface with form validation, clear error states and a clean, accessible layout.', tags: ['JavaScript','Auth UI'], live: 'https://userlogininfo.netlify.app', code: 'https://github.com/pnithishareddy/login' },
  { title: 'Event Management', art: 'events', image: '/projects/event-management.png', desc: 'Event planning platform for creating, organising and tracking events from one intuitive dashboard.', tags: ['React','Dashboard'], live: 'https://eventmanagementt.netlify.app', code: 'https://github.com/pnithishareddy/event-management' },
  { title: 'User Authentication', art: 'auth', image: '/projects/user-auth.png', desc: 'Complete sign-up and sign-in flow with protected pages and a consistent user experience.', tags: ['React','Authentication'], live: 'https://login-nithishareddy.netlify.app', code: 'https://github.com/pnithishareddy/User_Auth' },
  { title: 'Travel Ticket Booking', art: 'tickets', image: '/projects/ticket-booking.png', desc: 'Travel booking application for exploring options and reserving tickets through a guided, step-by-step flow.', tags: ['React','Booking'], live: 'https://ticketbookingtravel.netlify.app', code: 'https://github.com/pnithishareddy/TicketBooking_Travel' },
  { title: 'Anjali Home Stores', art: 'store', image: '/projects/anjali-home-stores.png', desc: 'Business website for a home-goods retailer presenting products, store details and customer contact information.', tags: ['Web Design','Business Site'], live: 'https://anjalihomeostores.netlify.app/', code: null },
]
