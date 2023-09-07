import { getMovies } from '@/sanity/sanity-utils';
import { Movie } from '@/types/Movie';


import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function MovieSection() {
    const movies = await getMovies();

  return (
            <div>
                <div className="hobby-title">Recent Watching</div>
                <div className="watching-wrapper">
                    {movies.map((movie) => (
                    <div key={movie._id}>
                        <Link href={`/movies/${movie.slug}`} key={movie._id} >
                        {movie.poster && (<Image src={movie.poster} alt={movie.title} width={200} height={270} loading="lazy" className="post-wrapper-img"
                        blurDataURL={movie.lqip} placeholder="blur" />)}
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
  );
}