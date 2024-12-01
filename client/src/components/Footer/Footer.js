import logo from '../../assets/icons/logo.png';
import classes from './Footer.module.scss';

const Footer = () => {

	return (
		<div className={classes.Footer}>
			<div className={classes.Wrapper}>
				<img className={classes.Logo} src={logo} alt='Beauty Salon Ealing Logo' />
				<div className={classes.Content}>
					<p>
						Copyright Beauty at Luxx &copy; {new Date().getFullYear()} <br className={classes.Break} />
						All Rights Reserved
					</p>
					<p>
						Website created by Vivek,Om & Dhruvil
					</p>
				</div>
				<img className={classes.Logo} src={logo} alt='Beauty Salon Ealing Logo' />
			</div>
		</div>
	);
};

export default Footer;