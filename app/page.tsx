'use client';

import { Button } from '../src/components/button/snippet';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '../src/components/table/snippet';

import '@park-ui/tailwind-plugin/preset.css';

import '../src/styles/global.css';

const productData = [
  {
    id: 'P001',
    name: 'MacBook Pro',
    category: 'Electronics',
    stock: 12,
    price: '$1999.00'
  },
  {
    id: 'P002',
    name: 'AirPods Pro',
    category: 'Audio',
    stock: 25,
    price: '$249.00'
  },
  {
    id: 'P003',
    name: 'Leather Wallet',
    category: 'Accessories',
    stock: 50,
    price: '$79.00'
  }
];

const Home = () => {
  function handleClick(
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    console.log('Hello Park UI clicked');
  }

  return (
    <main>
      <Button variant='solid' size='lg' onClick={handleClick}>
        Hello Park UI
      </Button>

      <Table variant='plain' size='md'>
        <TableCaption>Product Inventory</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className='last-column'>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData.map((product, index) => (
            <TableRow key={index}>
              {/* Direct tailwind CSS utility class (font-medium) */}
              <TableCell className='font-medium'>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className='last-column'>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Totals</TableCell>
            <TableCell>87</TableCell>
            <TableCell className='last-column'>$34,163.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
};

export default Home;
