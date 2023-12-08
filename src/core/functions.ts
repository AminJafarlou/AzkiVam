import { BASE_URL } from "./constants";

export async function getProducts(
  size: number,
  page: number,
  merchantIds?: number[]
): Promise<any> {
  const queryParams = new URLSearchParams({
    size: size.toString(),
    page: page.toString(),
  });

  const requestBody = new URLSearchParams();

  if (merchantIds && merchantIds.length > 0) {
    requestBody.append("merchantIds", JSON.stringify(merchantIds));
  }

  const fullUrl = `${BASE_URL}products?${queryParams.toString()}`;

  const response = await fetch(fullUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}
