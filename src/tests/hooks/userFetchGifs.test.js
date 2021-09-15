
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('User Fetch Gifs', () => {
    test('should return the initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Rick'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('should return an array of gifs', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Rick'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})