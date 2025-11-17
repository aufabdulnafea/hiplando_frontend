
export async function getPedigree(name: string) {
    const response = await fetch(
        `https://www.horsetelex.com/search/search/search-horses?name=${name}`
    );
    const data = await response.json();
    return data;
}
