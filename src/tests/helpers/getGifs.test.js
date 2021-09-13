import { getGifs } from "../../helpers/getGifs"

describe('getGifs', () => {
    test('should return an array of gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('should return an array of gifs', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })

})