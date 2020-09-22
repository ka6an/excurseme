import React from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const isLoadingSkeleton = props => {
  const { width, height, count, isLoading } = props;
  return isLoading && (
    <Skeleton width={width} height={height} count={count} />
  );
};

export const SkeletonHOC = connect(({ guide: { isLoading } }) => ({
  isLoading
}))(isLoadingSkeleton);
