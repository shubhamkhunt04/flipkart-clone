import { Button } from '@chakra-ui/button';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='navWrapper'>
        <div className='navItemWrapper'>
          <div>
            <img
              src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
              alt='flipkart'
              width='80px'
              height='100px'
            />
          </div>
          <Input
            variant='outline'
            placeholder='Search for products,brand and more'
            backgroundColor='white'
            width='600px'
            ml='8'
          />
          <Button colorScheme='teal' m='3'>
            Login
          </Button>
          <Button rightIcon={<ChevronDownIcon />} colorScheme='teal' m='3'>
            More
          </Button>
          <Button colorScheme='teal' m='3'>
            Card
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
