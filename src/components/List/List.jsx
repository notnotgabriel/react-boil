import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const List = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
};

List.propTypes = {
  articles: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(List);