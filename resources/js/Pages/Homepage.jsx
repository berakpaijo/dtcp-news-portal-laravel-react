import NewsCard from "@/Components/Homepage/NewsCard"
import Paginator from "@/Components/Homepage/Paginator"
import Navbar from "@/Components/Navbar"
import { Head, Link } from "@inertiajs/react"
import React from "react"

export default function Homepage(props){
  return (
  <div className="min-h-screen bg-slate-800 text-white">
    <Head title={props.title}/>
    <Navbar/>
    <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
      <NewsCard news={props.news.data}/>
    </div>
    <div className="flex justify-center items-center">
      <Paginator meta={props.news.meta}/>
    </div>
  </div>
  )
}