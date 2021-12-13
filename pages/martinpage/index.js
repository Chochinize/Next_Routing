import Link from 'next/link';
import styles from './../../styles/Martin.module.css'
import Head from 'next/head';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props:{lists:data}
    }
}

const Lists = ({lists}) => {
    <Head>
    <title> Martins List | AND FRIENDS</title>
    <meta name='keywords' content='lists'/>
    </Head>
    return (
        <div>
            <h1>List</h1>
            {lists.map(list=>(<Link href={`/martinpage/${list.id}`} key={list.id}>
                <a className={styles.single}>
                    <h3>
                        {list.name}
                    </h3>
                </a>
            </Link>))}
            </div>
    );
}
 
export default Lists;