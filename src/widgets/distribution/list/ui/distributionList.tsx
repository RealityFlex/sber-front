import { TableModel } from "@/entities/table";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import IconLoadingCircle from '~icons/eos-icons/bubble-loading';

import { DistributionBadge } from "@/entities/distribution/ui/badge";

import './styles.scss';

export const DistributionList: React.FunctionComponent = observer(() => {
    const tableStore = TableModel.tableStore;

    useEffect(() => {
        tableStore.history();
    }, [tableStore]);

    return (
        <div className="distribution-list">
            {tableStore.loading.list ? (
                <div className="distribution-list__fallback">
                    <IconLoadingCircle className="text-primary" width={36} height={36}/>
                </div>
            ) : tableStore.distributions.length === 0 ? (
                <div className="distribution-list__fallback">
                    <img className="w-[128px] opacity-90" src="/images/png/empty-box.png" alt="Empty List" />
                    <div>Список расчетов распределений пуст</div>
                </div>
            ) : (
                <div className="distribution-list__items">
                    {tableStore.distributions.map((distribution) => (
                        <DistributionBadge key={distribution.config_id} item={distribution} />
                    ))}
                </div>
            )}
        </div>
    );
});