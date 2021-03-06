import {getAllPostIds,getPostData} from "../../lib/posts";
import PageLayout from "../../components/layouts/pagelayout";

export default function Post({postData}) {
    return (
    <PageLayout>
        {postData.title}
        <br/>
        {postData.id}
        <br/>
        {postData.date}
        <br/>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </PageLayout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}
