import { getLocation } from "./location.util";

export async function GET() {
  const locationdata = getLocation();
  return Response.json(locationdata);
}
