import propTypes from 'prop-types';

export default function Link(props) {
  const { href, children } = props;

  function onClick(e) {
    e.preventDefault();
    window.history.pushState({}, '', href);
  }

  return <a href={href} onClick={onClick}>{children}</a>;
}
