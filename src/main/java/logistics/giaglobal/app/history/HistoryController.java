package logistics.giaglobal.app.history;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HistoryController {
	@Autowired
	private HistoryService historyService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/history")
	public History addHistory(@RequestBody History history) {
		return historyService.addHistory(history);
	}
	
	@CrossOrigin(maxAge = 3600)
	@RequestMapping("/shipment/{shipmentId}/histories/")
	public List<History> getHistoriesByShipment(@PathVariable String shipmentId) {
		return historyService.getHistoriesByShipment(shipmentId);
	}
	
	@RequestMapping("/history/{historyId}/delete")
	public void deleteHistory(@PathVariable int historyId) {
		historyService.deleteHistory(historyId);
	}

}
