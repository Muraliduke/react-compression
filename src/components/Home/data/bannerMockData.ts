import HomeCard from '../model'
import calendar from '../../../assets/images/calendar.svg';
import mobile from '../../../assets/images/mobile.svg';
import relax from '../../../assets/images/relax.svg';


const data: HomeCard[] = [
    {
        src: calendar,
        title: 'Cleaning Plan',
        content: `Choose a weekly, biweekly, or monthly cleaning plan. We schedule your recurring bookings to make things easy - but don’t worry, you can always reschedule 
        if things change.`
    },
    {
        src: mobile,
        title: 'Manage Easily Online',
        content: `Rescheduling, contacting your professional, and tipping are just a tap away.`
    },
    {
        src: relax,
        title: 'Hassle free',
        content: `An experienced, fully-equipped housekeeping professional will be there on time.`
    }
]

export default data;