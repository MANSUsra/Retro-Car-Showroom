import Link from "next/link";
import Image from "next/image";
import CustomButton1 from "./CustomButton1";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px]  mx-auto flex justify-between items-center sm:px-16 px-6 py-6 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={118}
          height={16}
          className='object-contain'
        />
      </Link>

      <CustomButton1
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-black rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
