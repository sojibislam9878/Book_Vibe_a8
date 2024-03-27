/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
import useReadedBooksLS from '../Hooks/useReadedBooksLS';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink' ,'#a823eb'];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
    const {readedBooksLS=[]}=useReadedBooksLS()
    const data = readedBooksLS;
    if (data.length <= 0) {
        return <div className='flex justify-center mt-12 bg-red-400'><h1 className='p-6 text-xl font-bold text-red-800'>No data available</h1></div>
    }
  return (
    <div className='flex justify-center items-center mt-12 w-full mx-auto overflow-x-auto'>
        <div>
        <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar
        dataKey="totalPage"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
    </div>
  );
};

export default PagesToRead;
