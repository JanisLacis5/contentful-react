import {createClient} from "contentful"
import {useEffect, useState} from "react"

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: "master",
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

export const useFetchProjets = () => {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getData = async () => {
        try {
            const entries = await client.getEntries()
            const projects = entries.items.map((item) => {
                const {title, url, picture} = item.fields
                const id = item.sys.id
                const img = picture?.fields?.file?.url
                return {title, url, id, img}
            })
            setProjects(projects)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return {projects, isLoading}
}
