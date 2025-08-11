import Link from "next/link"

export default function ShareMealPage(){
    return (
        <>
            <h1>This is the share page</h1>
            <p><Link href="/meals">Go Back!</Link></p>
        </>
    )
}