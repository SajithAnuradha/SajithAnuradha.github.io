import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/SajithAnuradha",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  // {
  //   icon: <FaYoutube />,
  //   path: "",
  // },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
