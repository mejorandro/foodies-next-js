import Link from "next/link"
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid"

export default function MealsPage(){
    return (
        <>
           <header className={classes.header}>
            Delicious meals, created {' '}
            <span className={classes.highlight}> by you</span>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
           </header>
           <main>
                <MealsGrid meals={[]}></MealsGrid>
           </main>
        </>
    )
}