import { updatesData } from '../data/mockData';
import UpdateItem from '../components/UpdateItem';

export default function Updates() {
    return (
        <div className="updates-page container section-padding">
            <header className="page-header">
                <h1>Updates & Logs</h1>
                <p className="page-subtitle">Freestyle status log of builds, lessons learned, and milestones.</p>
            </header>

            <div className="updates-list">
                {updatesData.map(update => (
                    <div className="update-list-item" key={update.id}>
                        <UpdateItem update={update} />
                    </div>
                ))}
            </div>
        </div>
    );
}
