
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import Books from './Books';

const Home = () => {
   const data= useLoaderData();
   console.log(data);
   

    return (
        <div>
            <Banner/>
            <Books data={data} />
        </div>
    );
};

export default Home;