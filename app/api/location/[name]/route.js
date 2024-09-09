import { getLocationByName } from "../location.util";

export async function GET(request, { params }) {
  const location = getLocationByName(params?.name);

  return Response.json(location);
}
