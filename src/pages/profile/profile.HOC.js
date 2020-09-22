import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchGuideStart,
  clearGuideData,
  fetchGuideScheduleStart,
  setCurrentGuide
} from '../../redux/guide/guide.actions';
import Profile from './profile.component';

const mapStateToProps = ({
  guide: { guideData, currentGuide, isLoading, error }
}) => {
  return {
    headerData: {
      firstName: guideData && guideData.first_name,
      middleName: guideData && guideData.middle_name,
      lastName: guideData && guideData.last_name,
      rating: guideData && guideData.rating,
      avatarUrl: guideData && guideData.avatar_url,
      category: guideData && guideData.category,
      stats: guideData && guideData.stats,
      socials: {
        facebook_url: guideData && guideData.facebook_url,
        twitter_url: guideData && guideData.twitter_url,
        vk_url: guideData && guideData.vk_url
      }
    },
    bodyData: {
      bio: [
        {
          title: 'Язык',
          text:
            guideData && guideData.languages
              ? guideData.languages.map(lang => lang.label).join(', ')
              : null,
          divider: true
        },
        { title: 'О себе', text: guideData && guideData.about },
        { title: 'Опыт', text: guideData && guideData.experience },
        {
          title: 'Образование',
          text: guideData && guideData.education
        },
        {
          title: 'Образовательное учреждение',
          text: guideData && guideData.educational_institution
        },
        {
          title: 'Ассоциации и союзы',
          text: guideData && guideData.associations
        },
        {
          title: 'Любимое место в городе',
          text: guideData && guideData.favorite_place
        },
        {
          title: 'Специализация',
          text: guideData && guideData.specialization
        },
        {
          title: 'Почему я работаю гидом',
          text: guideData && guideData.essay,
          divider: true
        }
      ]
    },
    currentGuide,
    isLoading,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentGuide: id => dispatch(setCurrentGuide(id)),
  getGuideData: id => dispatch(fetchGuideStart(id)),
  clearGuideData: () => dispatch(clearGuideData())
});

const ProfileHOC = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withRouter(ProfileHOC);
