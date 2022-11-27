export default function useLocation() {
  alert(window.location.pathname.replace('react-todos', ''));
  return window.location.pathname.replace('react-todos', '');
}
