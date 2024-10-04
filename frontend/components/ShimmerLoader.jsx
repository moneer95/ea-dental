
import React from 'react';
import ContentLoader from 'react-content-loader';

const ShimmerLoader = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <ContentLoader
        speed={2}
        width={600}
        height={300}
        viewBox="0 0 600 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="600" height="300" />
      </ContentLoader>
    </div>
  );
  
export default ShimmerLoader;
