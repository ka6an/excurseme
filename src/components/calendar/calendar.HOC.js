import { connect } from 'react-redux';
import {
  fetchGuideScheduleStart,
  fetchGuideToursByDateStart
} from '../../redux/guide/guide.actions';
import Calendar from './calendar.component';

const mapStateToProps = ({ guide: { guideSchedule, guideToursByDate } }) => ({
  availableDates: guideSchedule && guideSchedule['available-dates'],
  guideToursByDate: guideToursByDate
});

const mapDispatchToProps = dispatch => ({
  getGuideSchedule: (guideId, dateStart, dateEnd) =>
    dispatch(fetchGuideScheduleStart(guideId, dateStart, dateEnd)),
  getGuideToursByDate: (guideId, date) =>
    dispatch(fetchGuideToursByDateStart(guideId, date))
});

const CalendarHOC = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarHOC;
