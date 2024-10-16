import LinkedIn from '../../../public/assets/linkedin.png';
import GitHub from '../../../public/assets/github.png';

const Footer = ({ colorMode }) => {
    return (
        <div className="bg-slate-600 flex place-content-around text-white p-1/4 w-auto">
            <div className="font-bold justify-c text-center">Made By Mitanshu</div>
            <div className="flex">
                <div className="mr-4">
                    <a href="https://www.linkedin.com/in/mitanshu-agrawal-b18129251/">
                        <img className="h-8 logo" src={LinkedIn} alt="LinkedIn logo" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/mitanshu-agr711">
                        <img className="h-8 logo" src={GitHub} alt="GitHub logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
