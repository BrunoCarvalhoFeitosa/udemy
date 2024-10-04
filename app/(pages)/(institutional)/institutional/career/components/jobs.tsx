"use client"
import { jobs } from "@/content"
import { formatPrice } from "@/lib/format"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Button } from "@/app/components/ui/button"
import { FaMap, FaMoneyBillWave } from "react-icons/fa6"

export const Jobs = () => {
    return (
        <section className="mx-auto px-5 md:px-16 w-full">
            <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
                {jobs.map((job) => (
                    <div key={job.id} className="p-5 border">
                        <div>
                            <h3 className="text-lg font-semibold text-[#3C3B37]">
                                {job.title}
                            </h3>
                            <p className="text-sm">
                                {job.description}
                            </p>
                        </div>
                        <div className="mt-3">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="border-none md:text-base">
                                        Benefícios
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-y-1">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <div>
                                                    <FaMap className="w-5 h-5" />
                                                </div>
                                                <div className="text-sm font-semibold">
                                                    {job.type}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <div>
                                                    <FaMoneyBillWave className="w-5 h-5" />
                                                </div>
                                                <div className="text-sm font-semibold">
                                                    {formatPrice(job.salary)}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="mt-6 w-full">
                            <Button
                                type="button"
                                size="lg"
                                variant="secondary"
                                className="w-full"
                            >
                                Quero me candidatar
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}