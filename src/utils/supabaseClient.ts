import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export async function callEdge<T>(
    functionName: string,
    options: {
        body?: Record<string, unknown>;
    } = {},
): Promise<T> {
    const { body } = options;

    const { data: response, error } = await supabase.functions.invoke<
        ApiResponse<T>
    >(
        functionName,
        {
            body,
        },
    );

    if (error) {
        throw new Error("REQUEST_FAILED");
    }

    if (!response?.success) {
        throw new Error(response?.error);
    }

    return (response.data !== undefined ? response.data : response) as T;
}
