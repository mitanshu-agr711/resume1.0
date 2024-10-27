import LinkedIn from '../../../public/assets/linkedin.png';
import GitHub from '../../../public/assets/github.png';

const Footer = ({ colorMode }) => {
    return (
        <div className="bg-slate-600 fixed bottom-0 left-0 w-full flex place-content-around text-white">
            <div className="font-bold text-center">Made By Mitanshu</div>
            <div className="flex">
                <div className="mr-4">
                    <a href="https://www.linkedin.com/in/mitanshu-agrawal-b18129251/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 logo" src={LinkedIn} alt="LinkedIn logo" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/mitanshu-agr711" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 logo" src={GitHub} alt="GitHub logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
