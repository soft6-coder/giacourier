package logistics.giaglobal.app.shipmentstatus;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShipmentStatusController {
	@Autowired
	private ShipmentStatusService shipmentStatusService;
	
	@CrossOrigin(maxAge = 3600)
	@RequestMapping("/shipmentstatuses")
	public List<ShipmentStatus> getShipmentStatuses() {
		return shipmentStatusService.getShipmentStatuses();
	}
}
