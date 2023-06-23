export default async function serverFetch(search) {
    let url = `https://api-iconview-org.vercel.app/search?icon=${search}`;

    try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            return {};
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
