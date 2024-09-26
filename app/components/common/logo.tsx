"use client"
import Link from "next/link"
import { UdemyLogoSvg } from "@/public/svg/udemy-logo-svg"

interface LogoProps {
    url: string
    width: string
    height: string
}

export const Logo = ({ url, width, height }: LogoProps) => {
    return (
        <div className="box-border">
            <Link href={url}>
                <UdemyLogoSvg width={width} height={height} />
            </Link>
        </div>
    )
}