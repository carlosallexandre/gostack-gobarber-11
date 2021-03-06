import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

class ListProvidersMonthAvailabilityController {
  public static async index(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { providerId } = request.params;
    const { month, year } = request.query;

    const listProvidersMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProvidersMonthAvailability.execute({
      providerId,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}

export default ListProvidersMonthAvailabilityController;
