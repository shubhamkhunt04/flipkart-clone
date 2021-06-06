import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { productData } from '../../data/data';
import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { Box, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/layout';
import Card from '../card/ProductCard';

const Dashboard = () => {
  const [products, setProducts] = useState(productData);
  const [selectedSize, setSelectedSize] = useState([]);

  const lowToHighHandler = () => {
    setProducts([...productData].sort((a, b) => b.price - a.price));
  };

  const highToLowHandler = () => {
    setProducts([...productData].sort((a, b) => a.price - b.price));
  };

  const clearFilter = () => {
    setProducts(productData);
  };

  const sizeFilterHandler = (e) => {
    setSelectedSize([...selectedSize, e.target?.value]);
    if (e.target.checked) {
      setProducts(
        [...products].filter((product) =>
          product.size.includes(e.target?.value)
        )
      );
    } else {
      //   setProducts([...products].filter((product) => product.size));
      const updatedSize = [...selectedSize];
      let index = updatedSize?.indexOf(e.target?.value);
      if (index !== -1) {
        updatedSize.splice(index, 1);
        setSelectedSize(updatedSize);
      }
      console.log({ updatedSize });

      const [newUpdatedSize] = updatedSize?.map((size) => {
        console.log({ size });
        return productData?.filter((product) => product?.size?.includes(size));
      });
      setProducts(newUpdatedSize?.length ? newUpdatedSize : productData);
    }
  };

  return (
    <Box mt='4'>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} borderRight='1px solid black'>
          <Text fontSize='25px' mb='2'>
            Filters
          </Text>
          <hr />
          <Text fontSize='18px' mb='2'>
            SIZE
          </Text>
          <hr />
          <CheckboxGroup colorScheme='green'>
            <Box d='flex' justifyContent='flex-start' flexDirection='column'>
              <Checkbox value='S' onChange={sizeFilterHandler} m='1'>
                S
              </Checkbox>
              <Checkbox value='M' onChange={sizeFilterHandler} m='1'>
                M
              </Checkbox>
              <Checkbox value='L' onChange={sizeFilterHandler} m='1'>
                L
              </Checkbox>
              <Checkbox value='XL' onChange={sizeFilterHandler} m='1'>
                XL
              </Checkbox>
            </Box>
          </CheckboxGroup>
          <hr />
          <Text fontSize='18px' mb='2'>
            Brand
          </Text>
          <hr />
          <CheckboxGroup colorScheme='green'>
            <Box d='flex' justifyContent='flex-start' flexDirection='column'>
              <Checkbox value='S' onChange={sizeFilterHandler} m='1'>
                Nike
              </Checkbox>
              <Checkbox value='M' onChange={sizeFilterHandler} m='1'>
                Adidas
              </Checkbox>
              <Checkbox value='L' onChange={sizeFilterHandler} m='1'>
                Safari
              </Checkbox>
              <Checkbox value='XL' onChange={sizeFilterHandler} m='1'>
                KVL
              </Checkbox>
            </Box>
          </CheckboxGroup>
        </GridItem>
        <GridItem colSpan={4}>
          <Button
            colorScheme='twitter'
            size='xs'
            onClick={lowToHighHandler}
            m='2'
          >
            Sort low to heigh
          </Button>
          <Button
            colorScheme='twitter'
            size='xs'
            onClick={highToLowHandler}
            m='2'
          >
            heigh to low
          </Button>
          <Button colorScheme='twitter' size='xs' onClick={clearFilter} m='2'>
            Clear filter
          </Button>
          <SimpleGrid columns={[2, null, 3]} spacing='40px'>
            {products.map((product) => (
              <>
                <Card
                  imgUrl={product?.link}
                  name={product?.name}
                  price={product?.price}
                  productSize={product?.size}
                  brand={product?.brand}
                />
              </>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
