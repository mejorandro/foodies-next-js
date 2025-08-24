import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import Image from 'next/image';

export default function MealDetailsPage({ params }){

    const meal = getMeals(params.slug);

    return (
        <>
           <header className={classes.header}>
            <div className={classes.image}>
                <Image fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${'Email'}`}>NAME</a>
                </p>
                <p className={classes.summary}>SUMMARY</p>
            </div>
           </header>
           <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: '...',
            }}></p>
           </main>
        </>
    )
}