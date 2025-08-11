import Link from "next/link"

export default function MealsPage(){
    return (
        <>
            <h2>Spicy Garlic Shrimp</h2>
            <p>Juicy shrimp sautéed in spicy garlic butter 🔥🧄</p>
            <p><Link href="/meals/share">Share this meal</Link></p>
            <p><Link href="/meals/spicy-garlic">See recipe details</Link></p>
            <p><Link href="/community">Community Page!</Link></p>
        </>
    )
}