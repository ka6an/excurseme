import React from 'react';
import { isEmpty } from 'lodash';
import { Redirect } from 'react-router-dom';
import ProfileHeader from './profile-header/profile-header.component';
import ProfileBodyHOC from './profile-body/profile-body.HOC';
import Header from '../../components/header/header.component';

import ROUTES from '../../router-constants/app.routes';

import styles from './profile.css';

class Profile extends React.Component {
  state = {
    guideId: null
  };

  componentDidMount() {
    const { getGuideData, setCurrentGuide, match, error } = this.props;
    isEmpty(error) &&
      this.setState({ guideId: match.url.split('/guide/')[1] }, () => {
        const { guideId } = this.state;
        setCurrentGuide(guideId);
        getGuideData(guideId);
      });
  }

  componentWillUnmount() {
    const { clearGuideData } = this.props;
    setTimeout(() => clearGuideData(), 500);
  }

  render() {
    const { headerData, bodyData, match, error } = this.props;
    const { guideId } = this.state;

    if (error) {
      return <Redirect to={`${ROUTES.ERROR}`} />;
    }
    return (
      <>
        <Header />
        <div className={styles['page-guide-wrap']}>
          <ProfileHeader headerData={headerData} />
          <ProfileBodyHOC
            matchObj={match}
            bodyData={bodyData}
            selectedGuideId={guideId}
          />
        </div>
      </>
    );
  }
}

export default Profile;
