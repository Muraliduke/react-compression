import Link from './HLink';

const data: any[] = [
    {
      path: require('../../assets/images/call.svg'),
      title: 'We’re on call 24/7',
      content: Link({val: '+91-9551075056', type: 'phone'}),
    },
    {
        path: require('../../assets/images/mail.svg'),
        title: 'Need support?',
        content: Link({val: 'info@koops.co.in', type: 'mail'})
    },
    {
        path: require('../../assets/images/hours.svg'),
        title: 'Operating Hours',
        content: 'Mon – Sun  09:00 am – 07:00 pm'
    }
]

export default data;
