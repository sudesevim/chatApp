import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col h-full'>
        <SearchInput />
        <div className='py-2'></div>
        <div className='flex-1 overflow-auto'>
          <Conversations />
        </div>
        <div className='pt-3'></div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar
