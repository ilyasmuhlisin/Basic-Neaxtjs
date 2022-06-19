// untuk membaca type props
import PropsTypes from "prop-types";

const Footer = (props) => {
  if (!props.leftContent && !props.rightContent) {
    return null;
  }

  return (
    <footer className="main-footer clearfix fixed-bottom bg-white border-top">
      {props.rightContent && (
        <div
          className="float-right d-none d-sm-inline"
          style={{ color: "#6c757d" }}
        >
          {props.rightContent}
        </div>
      )}
      {props.leftContent && props.leftContent}
    </footer>
  );
};

Footer.PropsTypes = {
  leftContent: PropsTypes.element,
  rightContent: PropsTypes.string,
};

export default Footer;
