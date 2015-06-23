module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://admin:asldkfjsaooiejdsalko@galaga.0.mongolayer.com:10320/mytippingapp',

  sessionSecret: process.env.SESSION_SECRET || 'thisanmialisa6atthatcanrun39205isyou543eady',

  mailgun: {
    user: process.env.MAILGUN_USER || 'mytippingapp.com',
    password: process.env.MAILGUN_PASSWORD || 'key-ac4ead1d783677eec52a04aeb643ef68'
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_live_T6LD9s6fmtkuGMdIFJODYkXA',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_live_CgqmVvvivgdcZhjnKIuMjrIH',
    defaultPlan: 'free',
    plans: ['notrial', 'free', 'casual', 'weekend', 'semipro', 'professional', 'casual-yearly', 'weekend-yearly', 'semipro-yearly', 'professional-yearly'],
    planData: {
      'notrial': {
        name: 'notrial',
        price: 0
      },
      'casual-nocc': {
        name: 'casual-nocc',
        price: 0
      },
      'weekend-nocc': {
        name: 'weekend-nocc',
        price: 0
      },
      'semipro-nocc': {
        name: 'semipro-nocc',
        price: 0
      },
      'professional-nocc': {
        name: 'professional-nocc',
        price: 0
      },
      'free': {
        name: 'Free',
        price: 0
      },
      'casual': {
        name: 'Casual',
        price: 59
      },
      'casual-yearly': {
        name: 'Casual Yearly',
        price: 590
      },
      'weekend': {
        name: 'Weekend',
        price: 39
      },
      'weekend-yearly': {
        name: 'Weekend Yearly',
        price: 390
      },
      'semipro': {
        name: 'Semi-Pro',
        price: 89
      },
      'semipro-yearly': {
        name: 'Semi-Pro Yearly',
        price: 948
      },
      'professional': {
        name: 'Professional',
        price: 99
      }, 
      'professional-yearly': {
        name: 'professional Yearly',
        price: 990
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-57145964-1'
};
