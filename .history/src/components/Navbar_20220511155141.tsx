import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Triangle } from 'styled-icons/bootstrap';
import "antd/dist/antd.css";
import Account from "./Account/Account";
import Chains from "./Chains/Chains";
import NativeBalance from './NativeBalance';
import '../index.css';

function Navbar() {
  return (
    <div>
      <div className='bg-[#202020] outline outline-1 outline-[#343536] w-screen h-[3rem] grid grid-flow-col px-5'>
            <div className='my-auto text-4xl space-x-10 flex flex-row'>
              <motion.button className='tracking-widest' whileHover={{scale: 1.1}}>
                  <Link to='/home'>
                  <div className='flex flex-row space-x-3 align-middle'>
                    <Triangle className='w-8 fill-white'/>
                    <p className='my-auto text-white'>Anti</p>
                  </div>
                  </Link>
              </motion.button>
            </div>
            <div className='flex flex-row justify-self-end'>
              <NativeBalance />
              <Account />
              <Chains />
            </div>
        </div> 
    </div>

  )
}

export default Navbar