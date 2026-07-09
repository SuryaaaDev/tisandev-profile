/**
 * Utility ringan — tidak menggunakan `clsx` atau `tailwind-merge`
 * agar dependency minimal. Tambahkan jika proyek berkembang.
 */

/**
 * Gabungkan class names, filter falsy values.
 * Contoh: cn('foo', condition && 'bar') → 'foo bar'
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Tunda eksekusi sejumlah milidetik (untuk animasi / debounce).
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
